import { useState } from "react";

const Section=({title,description,isVisible,setIsVisible})=>{
   // const [isVisible,setIsVisible]=useState(false);
    return (
        <div className="p-2 m-2 border border-black">
            <h3 className="description">{title}</h3>
            {
                isVisible?( 
                <button onClick={()=> setIsVisible(false)} 
                className="btn inventory"
                >
                    Hide
                    </button>
                ) : ( 
                <button onClick={()=> 
                    setIsVisible(true)} className="btn"
                >
                    Show
                    </button>
                )
            }
           
           { isVisible && <p>{description}</p>}
        </div>
    );
    };
    const Instamart=()=>{
       // const[visibleSection, setIsVisibleSection]= useState
        const[visibleSection, setIsVisibleSection]=useState("about");
        return (
            <div>
                <h1 className="nav_link">Instamart</h1>
                <Section title={"About Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis."}
                isVisible={visibleSection=="about"}
                setIsVisible={()=>
              setIsVisibleSection("about")
            }
                />
                <Section title={"Team Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis."}
                isVisible={visibleSection=="team"}
                setIsVisible={()=>
                    setIsVisibleSection("team")
                }
                />
                <Section title={"Careers"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis."}
                isVisible={visibleSection=="careers"}
                setIsVisible={()=>
                    setIsVisibleSection("careers")
                }
                />
                   <Section title={"Product"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis."}
                isVisible={visibleSection=="product"}
                setIsVisible={()=>
                    setIsVisibleSection("product")
                }
                />
                    <Section title={"Details"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis vel accusantium quam tempora deserunt natus optio inventore voluptatum autem repudiandae dolorum nobis animi aperiam reiciendis, voluptate mollitia deleniti explicabo. Vitae a eveniet, saepe nihil accusamus repudiandae soluta aspernatur voluptas nostrum? Fugiat, alias autem! Nesciunt laboriosam maxime nulla! Qui, perferendis."}
                isVisible={visibleSection=="details"}
                setIsVisible={()=>
                setIsVisibleSection("details")
                }
                />
            </div>
        );
    
};
export default Instamart;