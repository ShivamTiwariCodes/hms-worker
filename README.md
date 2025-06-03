

---

# HMS Worker

**HMS Worker** is a Temporal-based microservice responsible for executing background workflows and long-running processes in the **Hospital Management System (HMS)**. Each hospital instance is served by its own dedicated `hms-worker`, allowing for scalable and isolated workflow execution.

---

## 📦 Features

* Executes Temporal workflows for hospital-specific tasks
* Supports dynamic workflow registration per hospital
* Decouples background processes from core services
* Integrates with HMS Core, Logger, and Auth services via `hms-sdk-impl`
* Built for horizontal scaling and multitenancy

---

## 🧱 Architecture

Each `hms-worker` instance is tied to a specific hospital. It connects to the Temporal server and listens for workflow executions queued for that hospital.

```text
Temporal Server
     │
 ┌───▼─────────────┐
 │ hms-worker (A)  │ ← handles workflows for Hospital A
 └─────────────────┘
 ┌───▼─────────────┐
 │ hms-worker (B)  │ ← handles workflows for Hospital B
 └─────────────────┘
```

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js v14+
* Temporal Server running (locally or remotely)
* HMS Core and HMS SDK implementations available
* `hms-core-sdk` and `hms-sdk-impl` dependencies installed

---

### ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-org/hms-worker.git
   cd hms-worker
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Copy the example file and update it for your hospital-specific settings:

   ```bash
   cp .env.example .env
   ```

   Example `.env`:

   ```env
   HOSPITAL_ID=hospital-a
   TEMPORAL_NAMESPACE=hms
   TEMPORAL_TASK_QUEUE=hospital-a-task-queue
   TEMPORAL_ADDRESS=localhost:7233

   HMS_CORE_URL=http://localhost:3000
   AUTH_SERVICE_URL=http://localhost:8081
   ```

4. **Start the Worker**

   ```bash
   npm start
   ```

---

## 📁 Project Structure

```text
hms-worker/
├── src/
│   ├── workflows/         # Temporal workflow definitions
│   ├── activities/        # Business logic to be executed in workflows
│   ├── utils/     
│   ├── worker/       
│   ├── tsconfig.json
├── package.json
```

---

## 🛠️ Useful Commands

| Command         | Description               |
| --------------- | ------------------------- |
| `npm start`     | Start the Temporal worker |
| `npm run build` | Compile TypeScript        |
| `npm test`      | Run test suite            |
| `npm run lint`  | Lint the source code      |

---

## 🔄 Workflow Example

Example of a patient registration workflow:

```ts
export async function registerPatientWorkflow(patientData: PatientInput) {
  await validateInputActivity(patientData);
  const patientId = await createPatientRecordActivity(patientData);
  await notifyDoctorActivity(patientId);
  return patientId;
}
```

---

## 🙋 Support

* [GitHub Issues](https://github.com/your-org/hms-worker/issues)
* Internal Slack or email for team communication

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
