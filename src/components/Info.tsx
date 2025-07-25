import { BsBuildings } from "react-icons/bs"
import { FaLink, FaLocationDot, FaTwitter } from "react-icons/fa6"

const Info = ({ data }:{data: object}) => {
  return (
    <>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:ml-45 mt-5">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-xl">
                    <FaLocationDot />
                    <p>{data.location ? data.location : "Location not available"}</p>
                </div>
                <div className="flex items-center gap-2 text-xl">
                    <FaLink />
                    <p>{data.html_url ? data.html_url : "Url not available"}</p>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-xl">
                    <FaTwitter />
                    <p>{data.twitter_url ? data.twitter_url : "Twitter handle not available"}</p>
                </div>
                <div className="flex items-center gap-2 text-xl">
                    <BsBuildings />
                    <p>{data.company ? data.company : "Company not available"}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Info