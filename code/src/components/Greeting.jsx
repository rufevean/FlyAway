import '../styles/HomePage.css'
export default function greeting() {
    const options = [  'Namaste,',  'Ni hao,',  'Bonjour,',  'Hello,',  'Guten Tag,',  'Hallo,',  'Hej,',  'Kamusta,']
    ;
    let count = 0;
    let languagesAnimation = function () {
        document.getElementById("greeting").innerHTML = options[count];
        count = (count % (options.length - 1)) + 1;
    };

    let languagesAnimationInterval = setInterval(languagesAnimation, 500);

    return <div className='HomePage__Welcome' id="greeting">hello,</div>;
}
