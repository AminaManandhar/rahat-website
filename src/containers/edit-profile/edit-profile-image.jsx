/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const EditProfileImage = ({ donations }) => {
    console.log(donations)
    return (
        <>
            <div className="nuron-information">
                <div className="profile-change">
                    <div className="profile-left col-lg-4">
                        <div className="profile-image mb--30">
                            <h4 className="title">Donor Information</h4>
                            <div className="img-wrap">
                                <Image
                                    id="rbtinput1"
                                    src="/images/profile/pepsico.png"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            </div>
                            <h6 className="title">{donations.donor.name}</h6>
                            <span className="latest-bid">
                                {donations.donor.description}
                            </span>
                        </div>

                    </div>

                    <div className="profile-left col-lg-4">
                        <div className="profile-image mb--30">
                            <h4 className="title">Beneficiary Information</h4>
                            <div className="img-wrap">
                                <Image
                                    id="rbtinput1"
                                    src="/images/portfolio/oxfam.jpeg"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            </div>
                            <h6 className="title">{donations.donee.name}</h6>
                            <span className="latest-bid">
                                {donations.donee.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default EditProfileImage;
