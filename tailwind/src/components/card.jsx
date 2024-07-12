import React from 'react'

function Card({type="british", color='black',image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDim25Sj5loXJbpYM0NKMZI2geNtFbDme5A&s"}){
    return(
        <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div >
                {type}
            </div>
            <div>
                {color}
            </div>
            </figcaption>
        </div>
        </figure>
        </div>
    )
}

export default Card