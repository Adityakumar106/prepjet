// src/admin/TestSeries.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TestSeries() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price:"",
  });
  const [seriesList, setSeriesList] = useState([]);

  const [testForm, setTestForm] = useState({ name: "", duration: 60 });
  const [selectedSeriesId, setSelectedSeriesId] = useState(null);

  // Create a new test series
  const handleSeriesSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("Series name is required!");
      return;
    }

    const newSeries = {
      id: Date.now(),
      ...form,
      tests: [], // each series starts empty
    };

    setSeriesList([...seriesList, newSeries]);
    setForm({ name: "", description: "",price:"" ,image: "" });
  };

  // Add a test inside a series
  const handleTestSubmit = (e, seriesId) => {
    e.preventDefault();
    if (!testForm.name.trim()) {
      alert("Test name is required!");
      return;
    }

    const updatedSeries = seriesList.map((series) => {
      if (series.id === seriesId) {
        return {
          ...series,
          tests: [
            ...series.tests,
            { id: Date.now(), ...testForm, questions: [] },
          ],
        };
      }
      return series;
    });

    setSeriesList(updatedSeries);
    setTestForm({ name: "", duration: 60 });
    setSelectedSeriesId(null);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold mb-4">Create Test Series</h1>

      {/* Create Test Series Form */}
      <form onSubmit={handleSeriesSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Series Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        {form.image && (
          <div className="mt-2">
            <p className="text-sm text-gray-500">Preview:</p>
            <img
              src={form.image}
              alt="Preview"
              className="w-40 h-24 object-cover rounded border"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Save Test Series
        </button>
      </form>

      {/* Existing Test Series List */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Existing Test Series</h2>
        {seriesList.length === 0 ? (
          <p className="text-gray-500 mt-2">No test series created yet.</p>
        ) : (
          <ul className="mt-2 space-y-4">
            {seriesList.map((series) => (
              <li
                key={series.id}
                className="border p-4 rounded bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  {series.image && (
                    <img
                      src={series.image}
                      alt={series.name}
                      className="w-16 h-12 object-cover rounded border"
                    />
                  )}
                  <div>
                    <h3 className="font-medium text-lg">{series.name}</h3>
                    <p className="text-sm text-gray-600">
                      {series.description}
                    </p>
                  </div>
                </div>

                {/* Add Test Button */}
                {selectedSeriesId === series.id ? (
                  <form
                    onSubmit={(e) => handleTestSubmit(e, series.id)}
                    className="mt-4 space-y-2"
                  >
                    <input
                      type="text"
                      placeholder="Test Name"
                      className="w-full border p-2 rounded"
                      value={testForm.name}
                      onChange={(e) =>
                        setTestForm({ ...testForm, name: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Duration (mins)"
                      className="w-full border p-2 rounded"
                      value={testForm.duration}
                      onChange={(e) =>
                        setTestForm({
                          ...testForm,
                          duration: e.target.value,
                        })
                      }
                    />
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Save Test
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSelectedSeriesId(series.id)}
                    className="mt-3 text-blue-600 hover:underline"
                  >
                    + Add Test
                  </button>
                )}

                {/* List of Tests */}
                {series.tests.length > 0 && (
                  <ul className="mt-4 pl-6 space-y-2">
                    {series.tests.map((test) => (
                      <li
                        key={test.id}
                        className="flex justify-between items-center border p-2 rounded bg-white"
                      >
                        <div>
                          <h4 className="font-medium">{test.name}</h4>
                          <p className="text-xs text-gray-500">
                            Duration: {test.duration} mins
                          </p>
                        </div>
                        <Link
                          to={`/admin/test-series/${series.id}/questions`}///:id/questions
                          className="text-indigo-600 hover:underline"
                        >
                          Manage Questions
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
