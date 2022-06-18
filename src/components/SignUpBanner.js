import React from 'react'
import signUpImage from "../images/signUpImage.jpeg"

function SignUpBanner() {
    return (
        <div className="container relative px-4 mx-auto my-10 z-10">
            <div className="relative w-full">
                <img
                    src={signUpImage}
                    alt="test"
                    className="h-[650px] md:h-full object-cover"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 h-1/2 translate-y-1/4 md:translate-y-1/2">
                    <div className="flex flex-col items-center">
                        <div className="text-left w-full text-white px-6 md:px-12">
                            <h1 className="text-lg ml-2 md:ml-0 lg:text-5xl font-bold mt-0 mb-6">
                                Bugün Katıl
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row  w-full px-6 md:px-12 text-white">
                            <div className="mb-3 text-sm md:text-md flex mx-2 flex-col md:w-[50%]">
                                <span> Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, and blutv.</span>
                                <span className='bg-dark-blue mt-2 w-28 h-12 flex justify-center items-center rounded-full'>Kaydol</span>
                            </div>
                            <div className="mb-3 text-sm md:text-md mx-2 md:w-[50%] leading-7">
                                <ul className='list-disc'>
                                    <li>Reklamsız TMDb'nin tadını çıkarın</li>
                                    <li>Kişisel bir izleme listesi tutun</li>
                                    <li>Abone olduğunuz akış hizmetlerine göre filtreleyin ve izleyecek bir şeyler bulun</li>
                                    <li>İzlediğiniz filmleri, dizileri ve TV şovlarını kaydedin</li>
                                    <li>Kişisel listeler oluşturun</li>
                                    <li>Veritabanımıza katkıda bulunun ve geliştirin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpBanner