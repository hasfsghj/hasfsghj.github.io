<template>
    <br>
    <div class="container">
        <div class="img" id="img1">
            <div class="txt">
                <h1>text text</h1>
                <p>ce de frumos se va primi. daca se va primi. errrmmerm sper ca se va primi. aici va fi informatie
                    despre idk ce. poate diverse tipuri de cancer. poate altceva. sincer habar nua m. am putea gen
                    despre noi sau despre aristotel sau altceva nu prea important care gasesti pe google</p>
            </div>
        </div>
        <div class="img" id="img2">
            <div class="txt">
                <h1>alt text</h1>
                <p>waowaowoa mult text mult mult muuult. nu tare stiu ce sa scriu. as putea sa scriu trupele mele
                    preferate! unele nume vor fi prescurtate pentru ca Imi Permit. csh, la dispute, stay focused, nict,
                    ptv, i hate sex</p>
            </div>
        </div>
        <div class="img" id="img3">
            <div class="txt">
                <h1>inca text</h1>
                <p>aici e mai putin text. jk aici este cel mai mult text din toate imaginile mw ha ha ha ha ha ha
                    HAAAAasdnkjaa... irelevant, la optionale este curs de inteligenta artificiala. eu mi l-am luat pt ca
                    imi este interesant machine learning si chestii de genul dar vreo 16 copii din biochem si l-au luat
                    si ma simt de parca majoritatea cred ca vor vorbi despre chat gpt la lectii</p>
            </div>
        </div>
        <div class="img" id="img4">
            <div class="txt">
                <h1>yippiee</h1>
                <p>mi se pare ca oleaca innebunesc asta e aristotel side effect... anyways da nu tare cred ca
                    biochimistii au realizat implicatiile la un curs de IA </p>
            </div>
        </div>
    </div>
    <br>
    <h1 class="head1">mai spunem poate ceva pe aici idk</h1>
    <br>
    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi quis veritatis animi
        fugit,
        dignissimos itaque unde modi dolore illum enim assumenda tempore aspernatur soluta harum expedita vero esse
        quisquam!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae laudantium eum dolore ipsa,
        numquam facilis beatae voluptatem, mollitia accusamus hic minima porro veniam quidem at, iusto dolor nam ut et!.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eos suscipit vero autem error numquam
        earum, eveniet omnis debitis quae facere veniam reprehenderit adipisci tempora nesciunt pariatur libero hic
        impedit?</p>
    <br>
    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam hic distinctio sunt harum
        possimus
        doloremque ducimus magnam expedita. Necessitatibus rerum voluptate repudiandae hic itaque pariatur facilis quam
        minus eveniet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique molestias dolores quas
        suscipit porro nobis. Molestiae eum illo consequatur perspiciatis beatae eos animi nisi praesentium quisquam!
        Illo, quibusdam error. Voluptatibus.</p>
    <br> <br>
</template>

<style>

.head1 {
    color:#564787;
}

body {
    background-color: #fff6f6;
}

.desc {
    padding: 0px 50px 0px 50px;
    color:#78689C;
}

.txt {
    color:#dbcbd8;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 275px;
    padding-left: 25px;
}

.txt:hover {
    opacity: 100%;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

.img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 400px;
    width: 300px;
    transition: opacity 0.3s ease;
    margin: 20px;
}

#img1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.019), rgba(0, 0, 0, 0.106)),
        url("https://www.colchesterzoologicalsociety.com/wp-content/uploads/2024/09/Red-Panda-7.jpg");
}

#img2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.019), rgba(0, 0, 0, 0.106)),
        url("https://www.allthingswild.co.uk/wp-content/uploads/2022/01/IMG_4702.jpg");
}

#img3 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.019), rgba(0, 0, 0, 0.106)),
        url("https://roadsendnaturalist.com/wp-content/uploads/2013/04/opossum-in-tree.jpg");
}

#img4 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.019), rgba(0, 0, 0, 0.106)),
        url("https://www.endangeredwolfcenter.org/wp-content/uploads/2021/11/MJS_5861-Daisy_3-1.jpg");
}
</style>