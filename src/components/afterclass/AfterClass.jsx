import './afterclass.css'
import './ResponsiveAfterClass.css'
import { RecipePost } from './RecipePost'

import PicRecipe1 from '../../assets/comida_1.svg'
import PicRecipe2 from '../../assets/comida_2.svg'
import PicRecipe3 from '../../assets/comida_3.svg'
import PicRecipe4 from '../../assets/comida_4.svg'

export const AfterClass = () => {
    return (
        <section className="bRecipes">
            <div className="recipes">
                <div className="infos">
                    <h2>India’s largest learning platform</h2>
                    <p>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
                </div>
                
                <div className="recipe-posts">
                    <RecipePost title='Physics Class Notes' 
                    src={PicRecipe1}
                    alt='A imagem of a beauty Broccoli Salad With Bacon'/>

                    <RecipePost title='Maths Class Notes'
                    src={PicRecipe2}
                    alt='A imagem of a beauty Classic Beef Burgers'/>

                    <RecipePost title='Classic Class Notes'
                    src={PicRecipe3}
                    alt='A imagem of a beauty Classic Potato Salad'/>

                    <RecipePost title='Chemistry Class Notes'
                    src={PicRecipe4}
                    alt='A imagem of a beauty Cherry Cobbler on the Grill'/>
                </div>
            </div>
        </section>
    )
}