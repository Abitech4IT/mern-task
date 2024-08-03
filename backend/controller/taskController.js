import Task from "../model/taskModel.js";

export const getAllTasks = async (req, res, next) => {
  try {
    const task = await Task.find();

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "task fetch successfully",
      data: task,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const createTask = async (req, res, next) => {
  try {
    const newTask = await Task.create({
      title: req.body.title,
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully!",
      data: newTask,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const UpdateTask = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({
        success: false,
        message: "task not found",
      });
    }

    const { title, completed } = req.body;

    const updatedTask = {};

    if (title) updatedTask.title = title;
    if (completed) updatedTask.completed = completed;

    const task = await Task.findByIdAndUpdate(id, updatedTask, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Task Updated successfully",
      task,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updateStatus = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({
        success: false,
        message: "task not found",
      });
    }

    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({
      success: true,
      message: "Status Updated successfully",
      task,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({
        success: false,
        message: "task not found",
      });
    }

    await Task.findByIdAndDelete(id);

    res.status(204).json({
      success: true,
      message: "Task Deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
