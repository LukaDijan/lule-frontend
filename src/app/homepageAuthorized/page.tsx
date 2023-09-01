import Navbar from "../components/Navbar/Navbar";
import SubjectGroup from '../components/homepageAuthorized/SubjectGroup'

export default function homeAuthorized()
{

    return (
        <>
            <div>
                <Navbar isLoggedIn={true}/>
                <SubjectGroup/>
            </div>
        </>
    );
}