import CommunityCard from "@components/cards/community";
import Pagination from "@components/pagination";
import SearchForm from "@components/search-form";
import clsx from "clsx";
import PropTypes from "prop-types";

const ExploreProductArea = ({
    className,
    space,
    communities,
    data,
    categories,
    countries,
}) => {
    const sanitizedCountries = countries.map((name) => ({
        value: name,
        text: name,
    }));

    const sanitizedCategories = categories.map((cat) => ({
        value: cat.id,
        text: cat.name,
    }));

    return (
        <div className={clsx("rn-product-area mt--50", className)}>
            <div className="container">
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between mb--25">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3>Communities</h3>
                        </div>
                        <SearchForm
                            categories={sanitizedCategories}
                            countries={sanitizedCountries}
                        />
                    </div>
                </div>
                <div className="row g-5">
                    {communities?.rows?.length > 0 ? (
                        <>
                            {communities?.rows?.map((community) => (
                                <div
                                    key={community.id}
                                    className="col-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <CommunityCard
                                        overlay
                                        name={community.name}
                                        country={community.country}
                                        fundRaisedLocal={
                                            community.fundRaisedLocal
                                        }
                                        currency={community.localCurrency}
                                        category={community?.category?.name}
                                        location={community.location}
                                        cover={community?.images?.cover}
                                        description={community.description}
                                        id={community.id}
                                        address={community?.address}
                                    />
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>No item to show</p>
                    )}

                    <Pagination
                        pagination={communities?.meta}
                        currentPage={communities?.meta?.currentPage}
                        rootPage="/communities"
                    />
                </div>
            </div>
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    communities: PropTypes.array,
    categories: PropTypes.array,
    countries: PropTypes.array,
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
