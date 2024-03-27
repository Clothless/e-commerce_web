import SpecialTitle from "@/app/components/SpecialTitle";

export default function Contact() {
  return (
    <div className="contact">
        <div className="container">
        <SpecialTitle title={"Contact"}/>
        <form action="mailto:issamhosni08@gmail.com" method="post">
            <div className="first">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <label htmlFor="">Subject</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <input type="submit" value="Submit" />
        </form>
        </div>
    </div>
  )
}
