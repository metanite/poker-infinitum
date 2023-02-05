import { useState } from 'react';

const Button = () => {

    const [isClick, setIsClick] = useState(false);

    return (
        <>
        <button 
        type="button" 
        class="px-16 py-3 bg-blue text-white font-semibold tracking-wide rounded outline-none text-[1.125rem] mt-6"
        onClick={() => setIsClick(!isClick)}
        >
            Sign Up
        </button>

        {
            isClick ? 
            <div class="fixed top-0 left-0 z-10 h-full w-full bg-gray-900/25">
                <div class="max-w-lg h-auto p-16 mx-auto my-[18%] flex flex-col items-center justify-center rounded-2xl bg-[#23262F] relative">
                    <button type="button" className="absolute top-3.5 right-3.5" onClick={() => setIsClick(!isClick)}>
                        <svg fill="#fff" width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"/>
                            <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"/>
                        </svg>
                    </button>
                    <h1 class="font-extrabold text-6xl tracking-wide">Yay!🎉</h1>
                    <p class="text-lg tracking-wide leading-1 mt-10">You have successfully created an account.</p>
                    <p class="text-lg tracking-wide leading-1">Check your email for verification.</p>
                </div>
            </div> : ""
        }
        </>
    )
}

export default Button