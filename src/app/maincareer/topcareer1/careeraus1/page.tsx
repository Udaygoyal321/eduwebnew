import McPage0 from "@/components/Career/MainCareer/McPage0/page";
import McPage1 from "@/components/Career/MainCareer/McPage1/page";
import McPage2 from "@/components/Career/MainCareer/McPage2/page";
<<<<<<< HEAD
=======
import MCPage4 from "@/components/Career/MainCareer/McPage4/page";
>>>>>>> 54e5b2b (Initial commit)
import McMpage from "@/components/CareerMobile/MainCareerMobile/McMpage/page";
import McMpage0 from "@/components/CareerMobile/MainCareerMobile/McMpage0/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function Career () {
    return (
        <>
        <div className="pt-21 hidden md:block">
<<<<<<< HEAD
=======
            <MCPage4 />
>>>>>>> 54e5b2b (Initial commit)
            <McPage0 />
            <McPage1 />
            <McPage2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <McMpage />
            </main>
        </div>
        </>
    )
}