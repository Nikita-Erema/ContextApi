import './List.css'
import { useUserRequest } from "../hooks/useUserRequest";
import type React from 'react';
import { Details } from './Details';
import { useState } from 'react';
import type { ElementList } from '../type/types';

export function List() {
    const list = useUserRequest();
    const [info, setInfo] = useState<ElementList>({
      name: '',
      id: 0
    })

    function moreInfo(e: React.MouseEvent<HTMLDivElement>) {
      const name = e.currentTarget.querySelector('p')?.textContent;
      const id = e.currentTarget.querySelector('p')?.id

      if (Number(id) == info.id) { return }

      if (name !== undefined) {
        setInfo({
          name: name,
          id: Number(id)
        })
      }
    }

    return  (
      <div className='box'>
        <div className="box-list">
          { list.length === 0 ?(
            <div>Список Пуст</div>
          ) : (
            list.map((element: {id: number, name: string}) => {
                return (
                    <div className="element-list" key={element.id} onClick={moreInfo}>
                        <p className="name-list" id={element.id.toString()}>{element.name}</p>
                    </div>
                )
            })
          )}  
        </div>
        {
          info.id !== 0 &&
        <Details info={info}></Details>
        }
      </div>
    )
}