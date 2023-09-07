import Navbar from "../components/Navbar/Navbar";
import SubjectGroup from '../components/homepageAuthorized/SubjectGroup'
import DocumentGroup from '../components/homepageAuthorized/DocumentGroup'

export default function homeAuthorized()
{

    return (
        <>
            <div>
                <Navbar isLoggedIn={true}/>
                <SubjectGroup label="Moji kolegij"/>
                <DocumentGroup/>
            </div>
        </>
    );
}