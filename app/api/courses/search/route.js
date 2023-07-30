import {NextResponse} from "next/server";
import courses from "../data.json";

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    // console.log(request.url);    //1:02:49-1:03:00
    // console.log(searchParams);   //1:03:00-1:03:20
    // console.log(searchParams.get('query'));      //1:03:52
    // console.log(searchParams.get('name'));      //1:04:00
    // return NextResponse.json(courses);
    //------------1:04:20-1:05:20------------
    const query = searchParams.get('query');
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase());
    })
    return NextResponse.json(filteredCourses);
    //-----------
}