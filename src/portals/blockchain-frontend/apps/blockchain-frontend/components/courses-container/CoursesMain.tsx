import { useState } from "react";
import CourseCardView from "./CouserCardView";
import { useComponentState } from "./state";
import CoursesContainer from "./CoursesContainer";
import { PlusOutlined ,ArrowLeftOutlined} from '@ant-design/icons';

export default function CoursesMain() {
    const { dataSource } = useComponentState();
    const [isCardView, setIsCardView] = useState(true);
    const onClickHandler = () => switchToCardView();
    const switchToCardView = () => {
        setIsCardView(!isCardView);
    };
    const title = isCardView ? 'Add a course' : 'Back';
    return (
        <>
        <div className="mx-auto px-4 py-16 text-center"> 
            <div className="text-center md:text-left mt-8">
                <span className="ml-8 mt-4 text-2xl font-bold">Courses</span>
            </div>
            <div className="ml-8 mt-4 text-center md:text-left">
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center space-x-2 hover:bg-blue-600" onClick={onClickHandler} >
                    {isCardView ?(
                   <PlusOutlined  />) : (<ArrowLeftOutlined />)}
                    <span>{title}</span>
                </button>
            </div>
            <div className="mt-8 ml-8">
            {isCardView ?  <CourseCardView  coursesData={dataSource} /> : <CoursesContainer />}
               
            </div>
        </div>
        </>
    );}