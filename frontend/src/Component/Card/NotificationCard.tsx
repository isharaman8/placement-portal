import {BsThreeDots} from "react-icons/bs"

const NotificationCard = () => {
  return (
    <div className="py-3 bg-white rounded-md flex justify-between items-center px-5">
      <div className="flex items-center space-x-5 ">
        <img
          className="h-12 w-12 rounded-full"
          src="https://res.cloudinary.com/zarmariya/image/upload/v1658141474/fks8floldp6zdyvqyf9z.webp" alt="" />
        <div className="flex space-x-1 items-center">
          <h1 className="text-xl font-semibold">Ashok Zarmariya</h1>
          <p>sent you a request for group project</p>
        </div>
      </div>
      <div>
        <p>1h</p>
        <BsThreeDots className="text-xl"/>
      </div>
    </div>
  )
}

export default NotificationCard
