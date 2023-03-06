import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import TextMaskCustom from "./CustomInput";

const NewStaff = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, watch, setValue, reset } = useForm();

  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    if (open) {
      reset();
      setValue("tel", "");
      setValue("access", "");
    }
  }, [open]);

  return (
    <Box alignSelf="end">
      <Fragment>
        <IconButton onClick={handleClickOpen} color="primary">
          <PersonAddAltIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle
              textAlign="center"
              color="#c8d3f1"
              fontWeight={700}
              fontSize={28}
            >
              Добавить сотрудника
            </DialogTitle>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150 }}>Имя</Typography>
                <TextField
                  {...register("name", { required: true })}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150 }}>Фамилия</Typography>
                <TextField
                  {...register("surname", { required: true })}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150 }}>Отчество</Typography>
                <TextField
                  {...register("surname", { required: true })}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150 }}>Подразделение</Typography>
                <TextField
                  {...register("surname", { required: true })}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150, color: "#16ae16" }}>
                  Сокращение
                </Typography>
                <TextField
                  {...register("surname", { required: true })}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150, color: "#fc8a04" }}>
                  Должность
                </Typography>
                <TextField
                  {...register("surname", { required: true })}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography
                  sx={{
                    width: 150,
                    color: "#16ae16",
                  }}
                >
                  Номер телефона
                </Typography>
                <TextField
                  {...register("surname", { required: true })}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150, color: "#16ae16" }}>
                  Внутренний номер
                </Typography>
                <TextField
                  value={watch("tel")}
                  onChange={(e) => setValue("tel", e.target.value)}
                  InputProps={{
                    inputComponent: TextMaskCustom as any,
                  }}
                  size="small"
                  sx={{ minWidth: 300, flexGrow: 2 }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150, color: "#16ae16" }}>
                  Эл. Почта
                </Typography>
                <TextField
                  {...register("email", { required: true })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">@invest.gazprom.ru</InputAdornment>
                    ),
                  }}
                  sx={{
                    minWidth: 300,
                    width: "min-content",
                    flexGrow: 2,
                  }}
                  size="small"
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
                flexWrap="wrap"
              >
                <Typography sx={{ minWidth: 150, color: "#16ae16" }}>Доступ</Typography>
                <FormControl sx={{ minWidth: 300, flexGrow: 2 }} size="small">
                  <InputLabel>Категория</InputLabel>
                  <Select
                    value={watch("access")}
                    label="Категория"
                    onChange={(e) => setValue("access", e.target.value)}
                    size="small"
                  >
                    <MenuItem value="access1">Доступ 1</MenuItem>
                    <MenuItem value="access2">Доступ 2</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Закрыть</Button>
              <Button
                type="submit"
                variant="contained"
                disabled={Object.values(watch()).includes("")}
              >
                Добавить
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    </Box>
  );
};

export default NewStaff;
