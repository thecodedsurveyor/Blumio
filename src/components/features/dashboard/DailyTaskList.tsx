import { useState } from "react";
import { useDailyTaskStore } from "../../../stores/dailyTaskStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HexColorPicker } from "react-colorful";
import toast, { Toaster } from "react-hot-toast";

// Helper to determine if text should be black or white based on background color
function getContrastYIQ(hexColor: string): string {
  let hex = hexColor.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
  }
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#222" : "#fff";
}

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  time: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Time is required and must be valid (HH:MM)",
    )
    .min(1, "Time is required"),
  color: z.string().min(1, "Color is required"),
});
type TaskForm = z.infer<typeof taskSchema>;

const DailyTaskList = () => {
  const { dailyTasks, addTask } = useDailyTaskStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [color, setColor] = useState("#3498db");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(taskSchema),
    defaultValues: { color },
  });

  const onSubmit = (data: TaskForm) => {
    addTask(data);
    toast.success("Task added!");
    setModalOpen(false);
    reset({ title: "", subtitle: "", time: "", color: "#3498db" });
    setColor("#3498db");
  };

  const onError = () => {
    toast.error("Please fix the errors in the form.");
  };

  return (
    <div className="col-span-12 rounded-xl bg-white p-6 shadow-sm lg:col-span-4">
      <Toaster position="top-right" />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Daily Task</h2>
        <button
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
          onClick={() => setModalOpen(true)}
        >
          + Add Task
        </button>
      </div>
      <div className="space-y-6">
        {dailyTasks.map((task) => (
          <div key={task.title} className="flex items-start gap-4">
            <div className="w-16 text-sm font-medium">{task.time}</div>
            <div
              className="flex-1 rounded-lg p-3"
              style={{
                backgroundColor: task.color,
                color: getContrastYIQ(task.color),
              }}
            >
              <h3 className="font-medium">{task.title}</h3>
              <p className="text-sm opacity-80">{task.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <button
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="mb-4 text-lg font-semibold">Add New Task</h3>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="space-y-4"
              autoComplete="off"
            >
              <div>
                <label className="mb-1 block text-sm font-medium">Title</label>
                <input
                  {...register("title")}
                  className={`w-full rounded border px-3 py-2 text-sm ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Task title"
                />
                {errors.title && (
                  <span className="text-xs text-red-500">
                    {errors.title.message}
                  </span>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Subtitle
                </label>
                <input
                  {...register("subtitle")}
                  className={`w-full rounded border px-3 py-2 text-sm ${
                    errors.subtitle ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Task subtitle"
                />
                {errors.subtitle && (
                  <span className="text-xs text-red-500">
                    {errors.subtitle.message}
                  </span>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Time</label>
                <input
                  {...register("time")}
                  type="time"
                  className={`w-full rounded border px-3 py-2 text-sm ${
                    errors.time ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.time && (
                  <span className="text-xs text-red-500">
                    {errors.time.message}
                  </span>
                )}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Color</label>
                <div className="flex items-center gap-4">
                  <HexColorPicker
                    color={color}
                    onChange={(c) => {
                      setColor(c);
                      setValue("color", c, { shouldValidate: true });
                    }}
                  />
                  <input
                    type="text"
                    {...register("color")}
                    value={color}
                    readOnly
                    className={`w-24 rounded border px-2 py-1 text-sm ${
                      errors.color ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.color && (
                  <span className="text-xs text-red-500">
                    {errors.color.message}
                  </span>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="rounded bg-gray-200 px-4 py-2 text-sm"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyTaskList;
