import http from "../http-common";

const getAll = () => {
    return http.get("/inquiries");
};

const InquiryDataService = {
    getAll
};

export default InquiryDataService;