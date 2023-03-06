import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  MonthView,
  ViewSwitcher,
  WeekView,
  AppointmentForm,
  ConfirmationDialog,
  EditRecurrenceMenu,
  AllDayPanel,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { appointments } from "./demo/month-appointments";
import {
  ChangeSet,
  EditingState,
  SchedulerDateTime,
  ViewState,
} from "@devexpress/dx-react-scheduler";
import { useState } from "react";

type CommitChangesType = ({
  added,
  changed,
  deleted,
}: {
  added?: any;
  changed?: any;
  deleted?: any;
}) => void;

const Meetings = () => {
  const [data, setData] = useState(appointments);
  const [currentDate, setCurrentDate] = useState<SchedulerDateTime>("2018-06-27");
  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [addedAppointment, setAddedAppointment] = useState({});
  const [appointmentChanges, setAppointmentChanges] = useState({});
  const [editingAppointment, setEditingAppointment] = useState(undefined);

  const changeAddedAppointment = (addedAppointment: any) => {
    console.log(addedAppointment);
    setAddedAppointment({
      startDate: "2018-07-27",
      endDate: "2018-07-27",
      allDay: false,
    });
  };

  const changeAppointmentChanges = (appointmentChanges: any) => {
    console.log(3);
    setAppointmentChanges({ appointmentChanges });
  };

  const changeEditingAppointment = (editingAppointment: any) => {
    console.log(4);
    setEditingAppointment(editingAppointment);
  };

  const commitChanges: CommitChangesType = ({ added, changed, deleted }) => {
    console.log(1);
    let newData = data;

    if (added) {
      const startingAddedId =
        newData.length > 0 ? Number(newData[data.length - 1].id) + 1 : 0;

      newData = [...newData, { id: startingAddedId, ...added }];
      // addShift(added);
    }

    setData(newData);
  };

  return (
    <Paper>
      <Scheduler data={data} firstDayOfWeek={1} locale={"ru-RU"}>
        <ViewState
          currentDate={currentDate}
          currentViewName={currentViewName}
          onCurrentViewNameChange={setCurrentViewName}
        />

        <EditingState
          onCommitChanges={commitChanges}
          addedAppointment={addedAppointment}
          onAddedAppointmentChange={changeAddedAppointment}
          appointmentChanges={appointmentChanges}
          onAppointmentChangesChange={changeAppointmentChanges}
          editingAppointment={editingAppointment}
          onEditingAppointmentChange={changeEditingAppointment}
        />

        <WeekView
          name="work-week"
          displayName="Рабочая неделя"
          excludedDays={[0, 6]}
          startDayHour={9}
          endDayHour={19}
        />
        <WeekView startDayHour={9} endDayHour={19} displayName="Неделя" />
        <MonthView displayName="Месяц" />
        <DayView displayName="День" startDayHour={9} endDayHour={19} />

        <AllDayPanel />
        <Toolbar />
        <ViewSwitcher />

        <EditRecurrenceMenu />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip />
        <AppointmentForm />

        <DateNavigator />
        <TodayButton messages={{ today: "Сегодня" }} />
      </Scheduler>
    </Paper>
  );
};

export default Meetings;
