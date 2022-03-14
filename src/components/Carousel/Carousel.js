import React, { useEffect, useState, Children, cloneElement } from "react"
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"
import s from './Carousel.module.css'
import Box1 from '../Box1/Box1'
import Box2 from '../Box2/Box2'
import Box3 from '../Box3/Box3'

const PAGE_WIDTH = 1900;
export const Carousel = ({children}) => {


    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState([])


    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }



    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])

    return (
        <div className={s.main_container}>
            <FaChevronLeft className={s.arrow} onClick={handleLeftArrowClick}/>
            <div className={s.window}>
                <div className={s.all_item_container}
                style= {{
                    transform: `translateX(${offset}px)`,
                }}
                >{pages}</div>
            </div>
            <FaChevronRight className={s.arrow} onClick={handleRightArrowClick}/>
        </div>
    )
}


export default Carousel
