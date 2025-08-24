import Button from "./Button"
import TasksSeparator from "./TasksSeparator"

import {
  AddIcon,
  TrashIcon,
  SunIcon,
  MoonIcon,
  CloudSunIcon,
} from "../assets/icons/index"

function Tasks() {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button variant="primary">
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator text="Manhã" icon={<SunIcon />} />
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator text="Tarde" icon={<CloudSunIcon />} />
        </div>

        <div className="space-y-3">
          <TasksSeparator text="Noite" icon={<MoonIcon />} />
        </div>
      </div>
    </div>
  )
}

export default Tasks
