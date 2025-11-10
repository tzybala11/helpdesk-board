export async function GET() {
    const tickets = [
        {
            id: 'HELP-100001',
            title: 'Unable to connect to Wi-Fi',
            description: 'Client unable to connect to Wi-Fi on personal device.',
            priority: 'Low',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-11-04T11:47:00Z'

        },
        {
            id: 'HELP-100002',
            title: 'Unable to connect to Wi-Fi',
            description: 'Client cannot connect to Wi-Fi on business laptop.',
            priority: 'Medium',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-11-07T05:12:00Z'

        },
        {
            id: 'HELP-100003',
            title: 'Display will not output to Desktop screen',
            description: 'Display stuck on a black screen on desktop.',
            priority: 'Medium',
            status: 'In Progress',
            assignee: 'Jordan',
            updatedAt: '2025-11-05T19:56:00Z'

        },
        {
            id: 'HELP-100004',
            title: 'Help installing software on business desktop',
            description: 'Software needs to be installed. Client unable to. Reported as nonessential to technician.',
            priority: 'Low',
            status: 'On Hold',
            assignee: 'Alicia',
            updatedAt: '2025-11-01T18:52:00Z'

        },
        {
            id: 'HELP-100005',
            title: 'VPN access required to work from home',
            description: 'Client needs access to continue working from home; works in another state.',
            priority: 'High',
            status: 'In Progress',
            assignee: 'Alicia',
            updatedAt: '2025-11-02T22:39:00Z'

        },
        {
            id: 'HELP-100006',
            title: 'Business laptop needs to be reimaged',
            description: 'Laptop needs to be reimaged due to immense system corruption.',
            priority: 'Critical',
            status: 'Resolved',
            assignee: 'Dylan',
            updatedAt: '2025-11-06T02:44:00Z'

        },
        {
            id: 'HELP-100007',
            title: 'MFA not working on personal device',
            description: 'MFA not working on device. Reported as non-essential to technician. Client said they could use their laptop until resolved.',
            priority: 'Medium',
            status: 'On Hold',
            assignee: 'Dylan',
            updatedAt: '2025-11-03T16:21:00Z'

        },
        {
            id: 'HELP-100008',
            title: 'Email needs to be created for new hire',
            description: 'New hire needs an email created to gain access to business resources.',
            priority: 'High',
            status: 'In Progress',
            assignee: 'Dylan',
            updatedAt: '2025-11-08T14:25:00Z'

        },
        {
            id: 'HELP-100009',
            title: 'Windows update failing each time initiated',
            description: 'Windows update will not continue after starting. Results in boot loop until a hard reset is done.',
            priority: 'Medium',
            status: 'On Hold',
            assignee: 'Alicia',
            updatedAt: '2025-11-05T07:33:00Z'

        },
        {
            id: 'HELP-100010',
            title: 'Calendar invites not being sent to user groups',
            description: 'Calendar invites not sending to user groups, but will send to individuals.',
            priority: 'Low',
            status: 'Resolved',
            assignee: 'Dylan',
            updatedAt: '2025-11-01T03:27:00Z'

        },
        {
            id: 'HELP-100011',
            title: 'Conference room MTR not functioning',
            description: 'MTR is not functioning. Client cannot start meeting due to a blue screen displaying on TV monitor.',
            priority: 'High',
            status: 'Resolved',
            assignee: 'Jordan',
            updatedAt: '2025-11-07T20:49:00Z'

        },
        {
            id: 'HELP-100012',
            title: 'Speaker in auditorium has constant buzzing sound',
            description: 'Client reports buzzing sound emanating from speaker.',
            priority: 'High',
            status: 'In Progress',
            assignee: 'Jordan',
            updatedAt: '2025-11-03T04:58:00Z'

        },
        {
            id: 'HELP-100013',
            title: 'Unable to connect to printer using business desktop',
            description: 'Unable to use printer on business desktop. Client may need printing permissions activated on account.',
            priority: 'Medium',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-11-02T09:14:00Z'

        },
        {
            id: 'HELP-100014',
            title: 'Microphone input not working in Teams call',
            description: 'Client unable to get microphone to output. Person at the other end of the call cannot hear client.',
            priority: 'Low',
            status: 'Open',
            assignee: 'Unassigned',
            updatedAt: '2025-11-04T23:05:00Z'

        },
        {
            id: 'HELP-100015',
            title: 'Card access to office floor not working',
            description: 'No one on the 4th floor can access the office space. Card reader must be broken or need to be reset.',
            priority: 'Critical',
            status: 'On Hold',
            assignee: 'Richard',
            updatedAt: '2025-11-06T15:18:00Z'

        },
    ];

    return Response.json(tickets);
}