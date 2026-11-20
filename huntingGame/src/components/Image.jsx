// Sam Goldberg
// 11/14/26
// Week 5 Animal Hunting Game 
export default function Image ({src, alt}) {

    return(
        <img src={`/src/assets/images/${src}`}
            alt={alt} className="img-animal"/>
    );

}