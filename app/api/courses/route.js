import {NextResponse} from 'next/server';
import {v4 as uuidv4} from 'uuid'; //---1:08:50---
import courses from './data.json';

export async function GET(request) {
    return NextResponse.json(courses);
}

export async function POST(request) {
    //---1:06:00-1:08:30---добавление новости в файл json-------------
    // const {title, description, level, link} = await request.json();
    // console.log(title, description, level, link);
    // return NextResponse.json({message: 'Новость добавлена'});
    //---POST->>localhost:3000/api/courses/
    //{"title": "My course",
    // "description: "This is my course",
    // "link": "https://something.com",
    // "level": "Beginner"
    //}
    //cmd: My Course This is my course Beginner https://something.com
    //----------------------------------------------------------------
    //---1:08:50-1:10:00---добавление новости в файл json-------------
    const {title, description, level, link} = await request.json();
    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    };
    courses.push(newCourse);
    return NextResponse.json(courses);
    //аналогично в "postman"-POST->>localhost:3000/api/courses/
    //ответ измененным id со сложным номером
    //...//--//--//--//--...
    //---1:06:30---удалил вначале создания функции
    // const course = await request.json();
    // courses.push(course);
    //return NextResponse.json({courses});
    //--- удалил вначале создания функции---------
}