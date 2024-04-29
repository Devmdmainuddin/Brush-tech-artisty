
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        // cssEase: "linear"
    };
    return (




        <Slider {...settings}>
            <div>
                <section className="relative max-h-[400px] bg-[url(https://i.ibb.co/Y8nvCsk/8.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-[400px] lg:items-center lg:px-8">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl"> Forest Landscape Paintings

                                <strong className="block font-extrabold text-rose-700"> Paintings. </strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            A tranquil forest scene painting depicting a peaceful woodland with tall trees, a meandering stream, and gentle sunlight filtering through the canopy.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                              

                                <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="relative max-h-[400px] bg-[url(https://i.ibb.co/nMGKqWx/7.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-[400px] lg:items-center lg:px-8">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl"> Portrait Drawings

                                <strong className="block font-extrabold text-rose-700">Drawings </strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            A lifelike graphite portrait drawing capturing the essence of a young woman, with meticulous attention to detail and shading.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                

                                <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section  className="relative max-h-[400px] bg-[url(https://i.ibb.co/1m3W3Pj/6.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                    <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:flex h-[400px] lg:items-center lg:px-8">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl"> lifelike graphite portrait drawing capturing

                                <strong className="block font-extrabold text-rose-700"> capturing</strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            A lifelike graphite portrait drawing capturing the essence of a young woman, with meticulous attention to detail and shading.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a href="#"
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                     Learn More
                                </a>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="relative max-h-[400px] bg-[url(https://i.ibb.co/1bhH9fb/5.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                    <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:flex h-[400px] lg:items-center lg:px-8">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl"> Watercolor Paintings

                                <strong className="block font-extrabold text-rose-700"> capturing the beauty </strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            A serene landscape watercolor painting capturing the beauty of a tranquil countryside scene, with rolling hills, a winding river, and fluffy clouds in the sky.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a href="#"
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                   Learn More
                                </a>

                              
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="relative max-h-[400px] bg-[url(https://i.ibb.co/xFMgdTV/12.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                    <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:flex h-[400px] lg:items-center lg:px-8">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl"> majestic landscape oil painting

                                <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            A majestic landscape oil painting featuring a snow-capped mountain range against a dramatic sunset sky, with warm hues of orange and pink blending into deep blue.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a href="#"
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                   Learn More
                                </a>

                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="relative max-h-[400px] bg-[url(https://i.ibb.co/VBys9Kb/13.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

                    <div className="relative mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:flex h-[400px] lg:items-center lg:px-8">
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold sm:text-5xl"> Let us find your

                                <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
                            </h1>

                            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a href="#"
                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                    Get Started
                                </a>

                                <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Slider>

    );
};

export default Banner;