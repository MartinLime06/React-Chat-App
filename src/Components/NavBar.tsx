import { auth } from '../API/FireBase';
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import Cookies from "js-cookie";

function Navbar(){
    const [user] = useAuthState(auth);

    const GoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const signOut = () => {
        auth.signOut();
        Cookies.remove('profilePicture');
        Cookies.remove('name');
        Cookies.remove('username');
    };

    if (user) {
        Cookies.set('profilePicture', user.photoURL || '');
        Cookies.set('name', user.displayName || '');
        Cookies.set('username', user.email || '');
        Cookies.set('loggedIn', 'true');
    }

    return (
        <nav className='flex justify-center items-center p-4 h-screen'>
            {user ? (
        <button onClick={signOut} className="bg-blue-500/40 hover:bg-blue-800 rounded-lg text-neutral-100 cursor-pointer" type="button">
          Sign Out
        </button>
      ) : (
        <button className="bg-blue-500/40 p-2 rounded-lg hover:bg-blue-800 text-neutral-100 cursor-pointer"
            onClick={GoogleSignIn}>Sign In With Google</button>
      )}

        </nav>
    )
};

export default Navbar;