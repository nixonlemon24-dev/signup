import '../App.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { UserIcon, EmailIcon, PasswordIcon, GoogleIcon, GitHubIcon } from '../components/UserIcons.jsx';
import { useAuth } from "../context/AuthContext";

export default function Signup() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({  mode: "onSubmit", criteriaMode: "all" });
    const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "", email: "" });
    const password = watch("password", "");
    const conditions = {
      lowercase: /[a-z]/.test(password) && errors.password?.type !== "lowercase",
      uppercase: /[A-Z]/.test(password) && errors.password?.type !== "uppercase",
      number: /[0-9]/.test(password) && errors.password?.type !== "number",
      special: /[!@#$%^&*]/.test(password) && errors.password?.type !== "special",
    };

    const allValid = Object.values(conditions).every(Boolean);

    const { signUp } = useAuth();

    const onSubmit = (data) => {
        alert(data.firstName + " " + data.lastName + "\n" + data.email + "\n" + data.password);
        signUp(data.firstName, data.lastName, data.email, password);
    };



    return (
<div className="page">
  {/* <div class="panel-left"> */}
    {/* <div class="brand">
      <div class="brand-mark">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9L7.5 13.5L15 5" stroke="#f5f0e8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="brand-name">Fieldwork</span>
    </div>

    <div class="panel-left-body">
      <h1>Build things that <em>matter.</em></h1>
      <p>Join thousands of creators and developers shipping meaningful work every day.</p>
      <ul class="feature-list">
        <li class="feature-item"><span class="feature-dot"></span>Instant project setup in seconds</li>
        <li class="feature-item"><span class="feature-dot"></span>Real-time collaboration tools</li>
        <li class="feature-item"><span class="feature-dot"></span>Powerful analytics dashboard</li>
        <li class="feature-item"><span class="feature-dot"></span>No credit card required</li>
      </ul>
    </div>

    <div class="panel-left-footer">© 2026 Fieldwork. All rights reserved.</div> */}
  {/* </div> */}

  <div className="panel-right">
    <div className="form-card">
      <div className="mobile-brand">
        <div className="mobile-brand-mark">
          {/* <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <path d="M3 9L7.5 13.5L15 5" stroke="#f5f0e8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> */}
        </div>
        <span className="mobile-brand-name">Fieldwork</span>
      </div>

      <div className="form-header">
        <h2>Create account</h2>
        <p>Already have one? <a href="#">Sign in</a></p>
      </div>



      <form id="signupForm" onSubmit={handleSubmit(onSubmit)}>
        <div className = "error-container">
            {errors.fname && <span className="error-message">First name is required</span>}
            {errors.email && <span className="error-message">Email is required</span>}
            {errors.lname && <span className="error-message">Last name is required</span>}
            {errors.password?.type === "required" && <span className="error-message">Password  is required</span>}
            {errors.terms && <span className="error-message">You must agree to the terms</span>}
            </div>


        <div className="form-row">
            
          <div className="field">
            <label htmlFor="fname">First name</label>
            <div className="input-wrap">
              {UserIcon({ size: 20, color: '#888', style: { position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' } })}
              <input type="text" id="firstName" name="firstName" placeholder="Donald" {...register("firstName", { required: true })} />
            </div>
         
          </div>
          <div className="field">
            <label htmlFor="lname">Last name</label>
            <div className="input-wrap">
              {UserIcon({ size: 20, color: '#888', style: { position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' } })}
              <input type="text" id="lastName" name="lastName" placeholder="Bulanadi" {...register("lastName", { required: true })} />
            </div>
           
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <div className="input-wrap">
            {EmailIcon({ size: 20, color: '#888', style: { position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' } })}
            <input type="email" id="email" name="email" placeholder="Donald.Bulanadi@example.com" 
            {...register("email", { 
              required: TextTrackCueList })} />
          </div>

        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="input-wrap" style={{ position: 'relative' }}>
            {PasswordIcon(({ size: 20, color: '#888', style: { position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' } }))}
            <input type="password" id="password" name="password" placeholder="Create a strong password" 
            {...register("password", {
              required: true,
              minLength: 8,
              validate: {
                lowercase: (v) => /[a-z]/.test(v) || "Must contain a lowercase letter",
                uppercase: (v) => /[A-Z]/.test(v) || "Must contain an uppercase letter",
                number: (v) => /[0-9]/.test(v) || "Must contain a number",
                special: (v) => /[!@#$%^&*]/.test(v) || "Must contain a special character",
              }
            })} />

            <button type="button" className="toggle-pw">      
            </button>
          </div>

            <div className="card">
            <p className="card-title">Your password must contain:</p>
            <ul className="req-list">
        
              <li className="req-item">
                <span className={`icon sm ${!watch('password')? 'unchecked': errors.password?.type === 'minLength'? 'checked-error': 'checked'}`}></span>
                <span className={errors.password?.type === "minLength" ? "error-message-password" : "error"}>Password must be at least 8 characters long</span>
              </li>
        
              <li className="req-item">
                <span className={`icon sm ${
                  !password
                    ? 'unchecked'
                    : allValid
                      ? 'checked'
                      : 'checked-error'
                }`}></span>
                Password Requirements
               </li>
        
            </ul>
        
            <ul className="sub-list">
              <li className="sub-item checked-sub">
                <span className={`icon sm ${!password ? 'unchecked' : conditions.lowercase ? 'checked' : 'checked-error'}`}></span> 
                <span className={errors.password?.types?.lowercase ? 'error-message-password' : ''}>Must Contain Lower case letters (a-z)</span>
              </li>
  
              <li className="sub-item checked-sub">
                <span className={`icon sm ${!password ? 'unchecked' : conditions.uppercase ? 'checked' : 'checked-error'}`}></span>
                <span className={errors.password?.types?.uppercase ? 'error-message-password' : ''}>Must Contain Upper case letters (A-Z)</span>   
              </li>

              <li className="sub-item checked-sub">
                <span className={`icon sm ${!password ? 'unchecked' : conditions.number ? 'checked' : 'checked-error'}`}></span>
                <span className={errors.password?.types?.number ? 'error-message-password' : ''}>Must Contain  Numbers (0-9)</span>
              </li>
        
              <li className="sub-item checked-sub">
                <span className={`icon sm ${!password ? 'unchecked' : conditions.special ? 'checked' : 'checked-error'}`}></span>
                <span className={errors.password?.types?.special ? 'error-message-password' : ''}>Must Contain Special characters (e.g. !@#$%^&*)</span>
              </li>
        
            </ul>
          </div>
 
        {/* <div className="strength-bar">
            <div className="strength-seg" id="s1"></div>
            <div className="strength-seg" id="s2"></div>
            <div className="strength-seg" id="s3"></div>
            <div className="strength-seg" id="s4"></div>
          </div> */}
          {/* <div className="strength-label" id="strengthLabel">Enter a password</div> */}
        </div>

        <div className="check-row">
          <input type="checkbox" id="terms" name="terms" { ...register("terms", { required: true }) }/>
          <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
        </div>

        <button type="submit" className="btn-submit">
          <span>Create my account →</span>
        </button>

      </form>

      <div className="divider">or continue with</div>

      <div className="social-row">
        <button className="btn-social">
          {GoogleIcon({ size: 17, color: '#888' })}
          Google
        </button>
        <button className="btn-social">
          {GitHubIcon({ size: 17, color: '#888' })}
          GitHub
        </button>
      </div>

    </div>
  </div>
</div>
    )
}

