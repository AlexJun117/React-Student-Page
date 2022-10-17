import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionLoadStudentData } from "../redux/actions";
import StudentTable from "../components/table/studentTable";
import EditModal from "../components/modal/editModal";
import ComponentA from "../components/componentA";
import ComponentB from "../components/componentB";
import ComponentC from "../components/componentC";
import BannerHome from "../components/bannerHome";
import DeleteModal from "../components/modal/deleteModal";

const Home = ({ studentAPI }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedStudentInfo, setSelectedStudentInfo] = useState({});
  const [tableHeaderNames, setTableHeaderNames] = useState([
    "Name",
    "DOB",
    "City",
    "State",
    "Zip",
    "Action",
  ]);
  const getStudentDataDispatch = useDispatch();
  const studentDataArray = useSelector((state) => state.studentData);

  useEffect(() => {
    // async function getStudentData() {
    //   const studentData = await studentAPI.getStudentData();
    //   getStudentDataDispatch(actionLoadStudentData(studentData));
    // }
    // console.log("home")
    // getStudentData();
  }, []);

  const onShowEditModal = useCallback((studentInfo) => {
    console.log(studentInfo);
    setSelectedStudentInfo(studentInfo);
    setShowEditModal(true);
  }, []);

  const onUpdateStudentInfo = (studentInfo) => {
    getStudentDataDispatch(
      actionLoadStudentData(
        studentDataArray.map((student) => {
          if (student.id !== studentInfo.id) {
            return student;
          } else {
            return studentInfo;
          }
        })
      )
    );
    setShowEditModal(false);
  };

  const onShowDeleteModal = useCallback((studentInfo) => {
    console.log(studentInfo);
    setSelectedStudentInfo(studentInfo);
    setShowDeleteModal(true);
  }, []);

  const onDeleteStudentInfo = (studentInfo) => {
    getStudentDataDispatch(
      actionLoadStudentData(
        studentDataArray.filter((student) => {
          if (student.id === studentInfo.id) {
            return false;
          } else {
            return true;
          }
        })
      )
    );
    setShowDeleteModal(false);
  };

  return (
    <>
      <BannerHome />
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      <StudentTable
        tableHeaderNames={tableHeaderNames}
        studentDataArray={studentDataArray}
        onShowEditModal={onShowEditModal}
        onShowDeleteModal={onShowDeleteModal}
      />
      <EditModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        studentInfo={selectedStudentInfo}
        onSave={onUpdateStudentInfo}
      />
      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        studentInfo={selectedStudentInfo}
        onDelete={onDeleteStudentInfo}
      />
    </>
  );
};

export default Home;
