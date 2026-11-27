// Sam Goldberg
// 11/14/26
// Week 5 Animal Hunting Game 
// The image component for the hunting game
export default function Image ({src, alt}) {

    return(
        <img src={`/src/assets/images/${src}`}
            alt={alt} className="img-animal"/>
    );

}