import { useState, useContext, useEffect, useRef } from 'react';
import { EmployeesContext } from '../store/employees-context';
import FormField from './ui/FormField';
import DeletingModal from './ui/DeletingModal';
import SuccessMessage from './SuccessMessage';
import { IoIosPersonAdd } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';

export default function EditEmployee({ employeeId, onCancel }) {
  const { employeesList, updateEmployee } = useContext(EmployeesContext);
  const [modalVisible, setModalVisible] = useState(false);
  const modal = useRef()
  const employee = employeesList.find(emp => emp.id === employeeId);

  const [employeeData, setEmployeeData] = useState(employee || {});
  const [successMessage, setSuccessMessage] = useState(false);

  const handleOpenDeletingModal = () => {
  setModalVisible(true);
  setTimeout(() => modal.current.open(), 0);
};

const handleCloseModal = () => {
  modal.current.close();
  setModalVisible(false);
};

const modalActions = (
  <>
    <button type="button" className="close-btn" onClick={handleCloseModal}>
      Cancel
    </button>
    <button type="button" className="delete-btn" onClick={() => {
      // do delete logic here
      handleCloseModal();
    }}>
      Delete
    </button>
  </>
);

  useEffect(() => {
    if (employee) setEmployeeData(employee);
  }, [employee]);

  if (!employee) return <p>Employee not found</p>;

  function handleChange(e) {
    const { name, value } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateEmployee(employeeData);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000);
  }

  return (
    <>
      {modalVisible && (
        <DeletingModal 
          ref={modal} 
          title="Are you sure? You will delete this employee permanently!" 
          actions={modalActions} 
        />
      )}
      <div className="min-h-screen px-4 ml-7 mt-32">
        <div className="flex items-center gap-3 mb-10">
          <IoIosPersonAdd className="text-amber-400 w-8 h-8" />
          <h2 className="text-stone-300 text-2xl font-semibold">Edit Employee</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-10 max-w-2xl"
        >
          <FormField label="First name" name="name" value={employeeData.name} onChange={handleChange} />
          <FormField label="Last name" name="lastName" value={employeeData.lastName} onChange={handleChange} />
          <div className="sm:col-span-2 my-4">
            <FormField label="Job position" name="position" value={employeeData.position} onChange={handleChange} />
          </div>
          <FormField label="Email" name="email" type="email" value={employeeData.email} onChange={handleChange} />
          <FormField label="Phone number" name="phone" value={employeeData.phone} onChange={handleChange} />
          <FormField
            label="Department"
            name="department"
            type="select"
            value={employeeData.department}
            onChange={handleChange}
            options={["Administration","Marketing","Engineering","Finance","Design","Product"]}
          />
          <FormField
            label="Employment type"
            name="employment"
            type="select"
            value={employeeData.employment}
            onChange={handleChange}
            options={["Full-time","Part-time","Freelancing"]}
          />
          <div className="flex flex-col sm:flex-row gap-4 mt-16 w-full sm:col-span-2">
            <button
              type="submit"
              className="flex-1 flex justify-center items-center gap-2 rounded-full px-3 py-3 bg-sky-800 text-stone-50 hover:bg-sky-900 hover:shadow-md transition duration-200 cursor-pointer"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 flex justify-center items-center gap-2 rounded-full px-3 py-3 border-2 border-sky-800 text-stone-50 hover:bg-sky-900 hover:shadow-md transition duration-200 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleOpenDeletingModal}
              className="flex-1 flex justify-center items-center gap-2 rounded-full px-3 py-3 border-2 border-red-600 text-stone-50 hover:bg-red-700 hover:shadow-md transition duration-200 cursor-pointer"
            >
              <MdDeleteOutline className="w-5 h-5" />
              Delete User
            </button>
          </div>
        </form>

        {successMessage && <SuccessMessage message="Employee successfully updated!" />}
      </div>
    </>
  )
}