import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ResponsiveDrawer from '../screens/dashboard'
import Admindashboard from '../screens/Admindashboard/admindashboard'
import Account from '../screens/Accounts/Account'
import NewTransaction from '../screens/Accounts/NewTransaction'
import TransactionList from '../screens/Accounts/TransactionList'
import Announcement from '../screens/Announcement/Announcement'
import Attendance from '../screens/Attendance/Attendance'
import MyAttendance from '../screens/Attendance/MyAttendance'
import Award from '../screens/Awards/Award'
import NewAward from '../screens/Awards/NewAward'
import Status from '../screens/Employment/Status'
import BalanceSheet from '../screens/Finance Report/BalanceSheet'
import IncomeStatement from '../screens/Finance Report/IncomeStatement'
import TrialBalance from '../screens/Finance Report/TrialBalance'
import PublicHoliday from '../screens/Holiday/PublicHoliday'
import WeeklyHoliday from '../screens/Holiday/WeeklyHoliday'
import Department from '../screens/HR/Department'
import Designation from '../screens/HR/Designation'
import EmployeeList from '../screens/HR/EmployeeList'
import NewEmployee from '../screens/HR/NewEmployee'
import RoleAndPermission from '../screens/HR/RoleAndPermission'
import LeaveStatus from '../screens/Leave/LeaveStatus'
import MyLeaves from '../screens/Leave/MyLeaves'
import NewLeave from '../screens/Leave/NewLeave'
import CalculatePayroll from '../screens/Payroll/CalculatePayroll'
import PayslipList from '../screens/Payroll/PayslipList'
import AddMilestone from '../screens/Project/AddMilestone'
import AddProject from '../screens/Project/AddProject'
import AddTaskStatus from '../screens/Project/AddTaskStatus'
import AllProject from '../screens/Project/AllProject'
import TaskPriority from '../screens/Project/TaskPriority'
import Team from '../screens/Project/Team'
import CompanySettings from '../screens/Setting/CompanySettings'
import Shift from '../screens/Shift/Shift'
import LeavePolicy from '../screens/Leave Policy/LeavePolicy'
function AppRouter() {
    return (
        <Router>
            <Routes>
            <Route path="/*" element={<ResponsiveDrawer />} />
                <Route path="admin/*" element={<ResponsiveDrawer />} />
            </Routes>
        </Router>
    )
}
export default AppRouter

                // {/* admindashboard */}
                // <Route path="dashboard" element={<Admindashboard />} />
                // {/* Accounts */}
                // <Route path="Account" element={<Account />} />
                // <Route path="Accounts/NewTransaction" element={<NewTransaction />} />
                // <Route path="Accounts/TransactionList" element={<TransactionList />} />
                // {/* Announcement  */}
                // <Route path="Announcement" element={<Announcement />} />
                // {/* Attendance  */}
                // <Route path="Attendance" element={<Attendance />} />
                // <Route path="MyAttendance" element={<MyAttendance />} />
                // {/* Awards */}
                // <Route path="Award" element={<Award />} />
                // <Route path="NewAward" element={<NewAward />} />
                // {/* Employement */}
                // <Route path="Employement/Status" element={<Status />} />
                // {/* FinanceReport */}
                // <Route path="FinanceReport/BalanceSheet" element={<BalanceSheet />} />
                // <Route path="FinanceReport/IncomeStatement" element={<IncomeStatement />} />
                // <Route path="FinanceReport/TrialBalance" element={<TrialBalance />} />
                // {/* Holiday */}
                // <Route path="Holiday/PublicHoliday" element={<PublicHoliday />} />
                // <Route path="Holiday/WeeklyHoliday" element={<WeeklyHoliday />} />
                // {/* HR */}
                // <Route path="Department" element={<Department />} />
                // <Route path="Designation" element={<Designation />} />
                // <Route path="EmployeeList" element={<EmployeeList />} />
                // <Route path="NewEmployee" element={<NewEmployee />} />
                // <Route path="RoleAndPermission" element={<RoleAndPermission />} />
                // {/* Leave */}
                // <Route path="LeaveStatus" element={<LeaveStatus />} />
                // <Route path="MyLeaves" element={<MyLeaves />} />
                // <Route path="NewLeave" element={<NewLeave />} />
                // {/* Leave Policy */}
                // <Route path="LeavePolicy" element={<LeavePolicy />} />

                // {/* Payroll */}
                // <Route path="CalculatePayroll" element={<CalculatePayroll />} />
                // <Route path="PayslipList" element={<PayslipList />} />
                // {/* Project */}
                // <Route path="AddMilestone" element={<AddMilestone />} />
                // <Route path="AddProject" element={<AddProject />} />
                // <Route path="AddTaskStatus" element={<AddTaskStatus />} />
                // <Route path="AllProject" element={<AllProject />} />
                // <Route path="TaskPriority" element={<TaskPriority />} />
                // <Route path="Team" element={<Team />} />
                // {/* Setting */}
                // <Route path="CompanySettings" element={<CompanySettings />} />
                // {/* Shift */}
                // <Route path="Shift" element={<Shift />} />