import './PostRecipe.css'
import './ResponsiveAfterClass.css'

export const RecipePost = (props) => {
    return (
       <div className="postWrapper">
           <div className="leftInfo">
               <img src={props.src} alt={props.alt}/>

           </div>
           <div className="rigthInfo">
               <h2>{props.title}</h2>
               <a  href={props.src} download>
               <button >Download Notes</button></a>
           </div>
       </div>
    )
}