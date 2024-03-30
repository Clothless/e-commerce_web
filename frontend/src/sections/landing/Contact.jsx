import SpecialTitle from "@/app/components/SpecialTitle";

export default function Contact() {
  return (
    <div className="contact">
        <div className="container">
        <SpecialTitle title={"Contact Us"}/>
        <form action="mailto:issamhosni08@gmail.com" method="post">
            <div className="first">
                <div>
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="Enter your full name"/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="Enter your email"/>
                </div>
            </div>
            <div>
                <label htmlFor="">Subject</label>
                <input type="text" name="subject" placeholder="Enter the subject"/>
            </div>
            <div>
                <label htmlFor="">Message</label>
                <textarea name="message" placeholder="Enter your the message"></textarea>
            </div>
            <input type="submit" value="Submit" />
        </form>
        </div>
    </div>
  )
}
