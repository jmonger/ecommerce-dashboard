import images from "./images"

const data = {
    user: {
        name: 'Ayesha',
        img: images.avt
    },
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Inquiries',
            subtitle: 'Total inquiries today',
            value: '3000',
            percent: 49
        },
        {
            title: 'Trips',
            subtitle: 'Total trips registered today',
            value: '$678',
            percent: 38
        },
        {
            title: 'Iteneraries',
            subtitle: 'Total iteneraries sold today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data