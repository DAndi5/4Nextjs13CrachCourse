'use client';
import {useState, useEffect} from 'react';
import Link from "next/link";
import LoadingPage from './loading';
import Courses from './components/Courses';
import CourseSearch from "@/app/components/CourseSearch";

const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch('/api/courses');
            const data = await res.json();
            setCourses(data);
            setLoading(false);
        }
        fetchCourses();
    }, []);

    if (loading) {
        return <LoadingPage/>;
    }

    return (
        <>
            <h1>Добро пожаловать на мой сайт</h1>
            <CourseSearch getSearchResults={(results) => setCourses(results)}/>
            <Courses courses={courses}/>
            {/*<ul>*/}
            {/*    <li><Link href='/'>Домой</Link></li>*/}
            {/*    <li><Link href='/about'>Акции и услуги</Link></li>*/}
            {/*    <li><Link href='/about/team'>Партнёрам</Link></li>*/}
            {/*</ul>*/}
            {/*<Courses/> // 01:56:04*/}
        </>
    )
}
export default HomePage
