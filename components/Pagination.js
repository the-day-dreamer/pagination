import styles from '@/styles/Pagination.module.css'
const Pagination = ({totalPosts , postsPerPage , setCurrentPage}) => {
    const pages = []
    for (let i = 0; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }
    
    return ( 
        <div className={styles.pagination}>
            <div className={styles.buttonBox}>
            {
                pages.map((page , index)=>{
                    return <button key={index} onClick = {()=>{setCurrentPage(page)}} >{page}</button>
                })
            }
            </div>
        </div>
     );
}
 
export default Pagination;