import {Suspense} from 'react'
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs'

const RepoPage = ({params: {name}}) => {
    return (
        <div className="card">
            {/*<h2>name = {name}</h2>*/}
            <Link href='/code/repos' className='btn btn-back'>
                Назад к репозиториям
            </Link>
            <p> ... </p>
            <Suspense fallback={<div>Загрузка репозитория...</div>}/>
            <Repo name={name}/>
            <Suspense fallback={<div>Загрузка дирректории...</div>}/>
            <RepoDirs name={name}/>
        </div>
    );
};
export default RepoPage;

// const RepoPage = ({params}) => {
//     return (<div className="card">
//             <h2>{params.name}</h2>
//             <p>Дотали работы </p>
//         </div>)
// };
