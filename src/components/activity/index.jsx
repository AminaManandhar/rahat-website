import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";

const Activity = ({
    className,
    title,
    path,
    desc,
    time,
    date,
    author,
    image,
    status,
}) => (
    <>
        <div className={clsx("single-activity-wrapper", className,)} style={{ border: '1px solid #cccaca', borderRadius: '15px' }}>
            <div className="inner">
                <div className="read-content">
                    <div className="thumbnail">
                        <Image
                            src="/images/profile/pepsico.png"
                            alt={"Nft_Profile"}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="content">
                        <h6 className="title">Donation offered</h6>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda quasi quam vero temporibus deleniti iusto saepe veritatis qui porro ab deserunt illum in  </p>
                        <div className="time-maintane">
                            <div className="time data">
                                <i className="feather-clock" />
                                <span>
                                    10-04-2023
                                </span>
                            </div>
                            <div className="user-area data">
                                <i className="feather-user" />
                                <span>Pepsico</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icone-area">
                    {status === "follow" && <i className="feather-thumbs-up" />}
                    {status === "sale" && <i className="feather-shopping-cart" />}
                    {status === "like" && <i className="feather-heart" />}
                    {status === "offer" && <i className="feather-user-plus" />}
                </div>
            </div>
        </div>
        <div className={clsx("single-activity-wrapper", className,)} style={{ border: '1px solid #cccaca', borderRadius: '15px' }}>
            <div className="inner">
                <div className="read-content">
                    <div className="thumbnail">
                        <Image
                            src="/images/portfolio/oxfam.jpeg"
                            alt={"Nft_Profile"}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="content">
                        <h6 className="title">Pending Acceptance</h6>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda quasi quam vero temporibus deleniti iusto saepe veritatis qui porro ab deserunt illum in  </p>
                        <div className="time-maintane">
                            <div className="time data">
                                <i className="feather-clock" />
                                <span>
                                    10-04-2023
                                </span>
                            </div>
                            <div className="user-area data">
                                <i className="feather-user" />
                                <span>Oxfam</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icone-area">
                    {status === "follow" && <i className="feather-thumbs-up" />}
                    {status === "sale" && <i className="feather-shopping-cart" />}
                    {status === "like" && <i className="feather-heart" />}
                    {status === "offer" && <i className="feather-user-plus" />}
                </div>
            </div>
        </div>
    </>

);

Activity.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
};

export default Activity;
