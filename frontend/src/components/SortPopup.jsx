import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../redux/slices/filterSlice'


function SortPopup() {
   const dispatch = useDispatch()
   const sortRef = useRef()

   let sortLabel = [
      {
         popupName: 'популярності',
         backendName: 'rating'
      },
      {
         popupName: 'ціні',
         backendName: 'price'
      },
      {
         popupName: 'алфавіту',
         backendName: 'title'
      }
   ]

   const activeLabelPopup = useSelector(state => state.filter.sortBy.popupName)

   const setActiveLabel = (obj) => {
      dispatch(setSort(obj))
      setVisiblePopup(false)
   }

   const [visiblePopup, setVisiblePopup] = useState(false)

   let toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }

   React.useEffect(() => {
      const catchClickOutside = event => {
         if (!event.path.includes(sortRef.current)) {
            setVisiblePopup(false)
         }

      }
      document.body.addEventListener('click', catchClickOutside)

      return () => {    // виконується коли компонент демонтується
         document.body.removeEventListener('click', catchClickOutside)
      }
   }, [])

   return (
      <div ref={sortRef} className="sort-popup">
         {
            visiblePopup
               ? <b className="sort-popup__sort-by sort-popup__triangle-inactive">Сортувати по: </b>
               : <b className="sort-popup__sort-by sort-popup__triangle-active">Сортувати по: </b>
         }
         <button className="sort-popup__label" onClick={toggleVisiblePopup}>{activeLabelPopup}</button>
         <ul className={`sort-popup__popup ${visiblePopup && 'sort-popup__popup-active'}`}>
            {
               sortLabel.map((obj, index) => (
                  <li
                     className={`sort-popup__popup-item ${activeLabelPopup === obj.popupName ? 'sort-popup__item-active' : ''} `}
                     key={`${obj.popupName}_${index}`}
                     onClick={() => {
                        setActiveLabel(sortLabel[index])
                     }}
                  >{obj.popupName}</li>
               ))
            }
         </ul>
      </div>
   )
}

export default SortPopup