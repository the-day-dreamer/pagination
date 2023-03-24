import styles from '@/styles/Details.module.css'
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Details = ({items}) => {
    const[dataLength , setDataLength] = useState()
    const[currentPage , setCurrentPage] = useState(1)
    const[postsPerPage , setPostsPerPage] = useState(10)
    const[detail , setDetail] = useState([])
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const handleClick = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setDetail(data.slice(firstPostIndex , lastPostIndex))
            setDataLength(data)
            console.log(data.length)
        })
    }
    
    return ( 
        
        <div className={styles.details}>
            <button className={styles.button} onClick = {handleClick}>GET</button>
            {
                detail.map((item , index) =>{
                    return <div key={index} className = {styles.title}> {item.title} </div>
                })
            }
            <Pagination totalPosts={dataLength.length}  postsPerPage = {postsPerPage} setCurrentPage = {setCurrentPage}/>
        </div> 
     );
}
 
export default Details