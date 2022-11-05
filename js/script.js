
let pounds = document.querySelector(".pounds"),
    kilograms = document.querySelector(".kilo"),
    oz = document.querySelector(".oz");
    mg = document.querySelector(".mg");
    mt = document.querySelector(".mt");
    lt = document.querySelector(".lt");
    st = document.querySelector(".st");
    g = document.querySelector(".g");
    form = document.querySelector("form");

    form.addEventListener("input", convertWeight);

    function convertWeight(e){
    if(e.target.classList.contains("pounds")){
        let x = e.target.value;

        kilograms.value = x * .453592;
        oz.value = x * 16;
        mg.value = x * 453592;
        mt.value = x * 0.000453592;
        lt.value = x * 0.0004464286;
        st.value = x * 0.0005;
        g.value = x * 453.592;

    }
    if(e.target.classList.contains("kilo")){
        let x = e.target.value;

        pounds.value = x * 2.2046244202;
        oz.value = x * 35.273990723;
        mg.value = x * 453592;
        mt.value = x * 0.001;
        lt.value = x * 0.0009842073;
        st.value = x * 0.0011023122;
        g.value = x * 1000;

    }
    if(e.target.classList.contains("oz")){
        let x = e.target.value;

        kilograms.value = x * 0.0283495;
        pounds.value = x * 0.0625;
        mg.value = x * 28349.5;
        mt.value = x * 0.0000283495;
        lt.value = x * 0.0000279018;
        st.value = x * 0.00003125;
        g.value = x * 28.3495;

    }
    if(e.target.classList.contains("mg")){
        let x = e.target.value;

        kilograms.value = x * 0.000001;
        oz.value = x * 0.000035274;
        pounds.value = x * 0.0000022046;
        mt.value = x * 9.999999999E-10;
        lt.value = x * 9.842073304E-10;
        st.value = x * 1.10231221E-9;
        g.value = x * 0.001;

    }
    if(e.target.classList.contains("mt")){
        let x = e.target.value;

        kilograms.value = x * 1000;
        oz.value = x * 35273.990723;
        mg.value = x * 1000000000;
        pounds.value = x * 2204.6244202;
        lt.value = x * 0.9842073304;
        st.value = x * 1.1023122101;
        g.value = x * 1000000;

    }
    if(e.target.classList.contains("lt")){
        let x = e.target.value;

        kilograms.value = x * 1016.04608;
        oz.value = x * 35840;
        mg.value = x * 1016046080;
        mt.value = x * 1.01604608;
        pounds.value = x * 2240;
        st.value = x * 1.12;
        g.value = x * 11192810437;

    }
    if(e.target.classList.contains("st")){
        let x = e.target.value;

        kilograms.value = x * 907.184;
        oz.value = x * 32000;
        mg.value = x * 907184000;
        mt.value = x * 0.907184;
        lt.value = x * 0.8928571429;
        pounds.value = x * 2000;
        g.value = x * 907184;

    }
    if(e.target.classList.contains("g")){
        let x = e.target.value;

        kilograms.value = x * 0.001;
        oz.value = x * 16;
        mg.value = x * 1000;
        mt.value = x * 0.000001;
        lt.value = x * 9.842073304E-7;
        st.value = x * 0.0000011023;
        pounds.value = x * 0.0022046244;

    }


}