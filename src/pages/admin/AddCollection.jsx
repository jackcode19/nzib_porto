import React, { useContext, useState, useEffect } from "react"
import LayoutAdmin from "../../components/admin/layout/LayoutAdmin"
import { dataDb, imagesDb } from "../../firebase/firebaseConfig"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { addDoc, collection, getDoc, Timestamp } from "firebase/firestore"
import { toast } from "react-toastify"
import { Progress } from "@material-tailwind/react"

function AddCollection({ user }) {
  const initialState = {
    category: "",
    createdAt: Timestamp.now().toDate(),
  }

  const [file, setFile] = useState(null)
  const [form, setForm] = useState(initialState)
  const [progress, setProgress] = useState(0)

  const { category, createdAt } = form

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(imagesDb, `portfolio/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log("Upload is " + progress + "% done")
          setProgress(progress)
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused")
              break
            case "running":
              console.log("Upload is running")
              break
            default:
              break
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to firebase successfully")
            setForm((prev) => ({ ...prev, imageUrl: downloadUrl }))
          })
        }
      )
    }

    file && uploadFile()
  }, [file])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const addPortfolio = async (e) => {
    e.preventDefault()
    if (category) {
      try {
        await addDoc(collection(dataDb, "collection"), {
          ...form,
        })
        toast.success("Portfolio created successfully")
        setProgress(0)
        window.location.reload(true)
      } catch (err) {
        console.log(err)
      }
    } else {
      return toast.error("All fields are mandatory to fill")
    }
    navigate("/admin-list-collection")
  }
  return (
    <LayoutAdmin user={user}>
      <div className="w-full px-4 pt-16">
        <div className="max-w-full text-center mx-auto mb-16">
          <h2 className="text-4xl sm:text-6xl text-slate-100 font-pixelF">
            Add Collection
          </h2>
        </div>
        <div>
          <div className=" flex justify-center">
            <div className=" bg-main px-10 py-10 rounded-xl border border-gray-200 ">
              <div className="">
                <h1 className="text-center text-white text-xl mb-4 font-bold">
                  Upload
                </h1>
              </div>

              <form action="" onSubmit={addPortfolio}>
                <div className="mb-3">
                  <input
                    type="file"
                    name="imageurl"
                    required
                    onChange={(e) => setFile(e.target.files[0])}
                    className=" bg-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg placeholder:text-gray-800 outline-none"
                    placeholder="Product imageUrl"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={handleChange}
                    className=" bg-gray-200 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-800 outline-none"
                    placeholder="Collection Category"
                  />
                </div>
                {progress === 0 ? null : (
                  <div className="progress mb-5">
                    <div
                      className="bg-sky-600 progress-bar progress-bar-striped mt-2 text-slate-100 rounded-md p-1"
                      style={{ width: `${progress}%` }}
                    >
                      {`Uploading image ${progress}% `}
                    </div>
                  </div>
                )}
                <div className=" flex justify-center mb-3">
                  <button
                    className={`  ${
                      progress !== null && progress < 100
                        ? "bg-slate-700 w-full text-slate-500 font-bold  px-2 py-2 rounded-lg"
                        : "bg-primaryYellow w-full text-slate-100 font-bold  px-2 py-2 rounded-lg hover:bg-primaryYellow2"
                    }`}
                    // className=" bg-primaryYellow w-full text-slate-100 font-bold  px-2 py-2 rounded-lg"
                    type="submit"
                    disabled={progress !== null && progress < 100}
                  >
                    Add Collection
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}
export default AddCollection
