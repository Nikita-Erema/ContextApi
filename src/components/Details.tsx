import { useEffect, useState } from 'react'
import {type Users, type UserInfo } from '../type/types'
import './Details.css'

async function getUserInfo(id: number) {
    const res = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    
    if (!res.ok) {
        if (res.status === 404) {
            throw new Error('Пользователь не найден')
        }
        throw new Error('Ошибка загрузки данных')
    }
    
    return await res.json();
}

export function Details({info}: UserInfo) {
    const [error, setError] = useState('');
    const [infoUser, setInfoUser] = useState<Users>({
        avatar: '',
        details: {
            city: '',
            company: '',
            position: ''
        },
        id: 0,
        name: ''
    });
    
    useEffect(() => {
        const load = async () => {
            try {
                const res = await getUserInfo(info.id);
                setInfoUser(res);
                setError('');
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ошибка');
                setInfoUser({
                    avatar: '',
                    details: { city: '', company: '', position: '' },
                    id: 0,
                    name: ''
                });
            }
        } 

        load();
    }, [info.id])

    if (error) {
        return <div className='info-box error'>{error}</div>;
    }

    return (
        <>
            { infoUser.id == 0  ?
                    <div className='info-box'>Loading...</div> 
                :
                    <div className="info-box">
                        <img src={infoUser.avatar} alt="" className='img-info'/>
                        <h1 className='name'>{infoUser.name}</h1>
                        <p className='info'>City: {infoUser.details.city}</p>
                        <p className='info'>Company: {infoUser.details.company}</p>
                        <p className='info'>Position: {infoUser.details.position}</p>
                    </div>
            }
        </>
    )
}