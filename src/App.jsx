import { useState, useEffect, useContext } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import Sidebar from "./components/ui/Sidebar.jsx";
import NoEmployees from "./components/NoEmployees.jsx";
import EmployeesContextProvider, { EmployeesContext } from "./store/employees-context.jsx";
import NewEmployee from "./components/NewEmployee.jsx";
import AllEmployees from "./components/AllEmployees.jsx";
import SelectedEmployee from "./components/SelectedEmployee.jsx";

function AppContent() {
  const [isUserLoggedIn, setLogin] = useState(false);
  const [isWrongCredentials, setWrongCredentials] = useState(false);
  const { employeesList } = useContext(EmployeesContext);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [currentView, setCurrentView] = useState(null);

  // Initialize currentView
  useEffect(() => {
    if (!currentView) {
      setCurrentView(employeesList.length === 0 ? "noEmployees" : "allEmployees");
    }
  }, [employeesList, currentView]);

  // Auto-switch to noEmployees if list is empty while viewing allEmployees
  useEffect(() => {
    if (currentView === "allEmployees" && employeesList.length === 0) {
      setCurrentView("noEmployees");
    }
  }, [employeesList, currentView]);

  function handleLogin(credentials) {
    if (credentials.username.trim() === "admin" && credentials.password.trim() === "admin") {
      setLogin(true);
    } else {
      setWrongCredentials(true);
    }
  }

  return (
    <div className="flex h-screen w-screen">
      {!isUserLoggedIn ? (
        <div className="flex-1">
          <Login onLogin={handleLogin} isWrongCredentials={isWrongCredentials} />
        </div>
      ) : (
        <>
          {/* Sidebar */}
          <Sidebar
            onAddNewEmployee={() => setCurrentView("newEmployee")}
            onViewAllEmployees={() =>
              setCurrentView(employeesList.length === 0 ? "noEmployees" : "allEmployees")
            }
          />

          {/* Main Content */}
          <div className="flex-1 md:ml-[20%]">
            {currentView === "newEmployee" && (
              <NewEmployee
                onCancel={() =>
                  setCurrentView(employeesList.length === 0 ? "noEmployees" : "allEmployees")
                }
              />
            )}
            {currentView === "noEmployees" && (
              <NoEmployees onAddNewEmployee={() => setCurrentView("newEmployee")} />
            )}
            {currentView === "allEmployees" && employeesList.length > 0 && (
              <AllEmployees
                onViewEmployee={(id) => {
                  setSelectedEmployeeId(id);
                  setCurrentView("selectedEmployee");
                }}
              />
            )}
            {currentView === "selectedEmployee" && (
              <SelectedEmployee
                employeeId={selectedEmployeeId}
                onCancelEdit={() => setCurrentView("allEmployees")}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <EmployeesContextProvider>
      <AppContent />
    </EmployeesContextProvider>
  );
}