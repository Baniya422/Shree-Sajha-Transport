<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(ContactRequest $request): JsonResponse
    {
        $contact = Contact::query()->create($request->validated());

        return response()->json([
            'message' => 'Contact message received',
            'data' => $contact,
        ], 201);
    }

    public function adminIndex(): JsonResponse
    {
        return response()->json(Contact::query()->latest()->paginate(20));
    }

    public function adminUpdate(Request $request, Contact $contact): JsonResponse
    {
        $contact->update($request->only(['status']));

        return response()->json([
            'message' => 'Contact updated successfully',
            'data' => $contact->fresh(),
        ]);
    }

    public function adminDestroy(Contact $contact): JsonResponse
    {
        $contact->delete();

        return response()->json([
            'message' => 'Contact deleted successfully',
        ]);
    }
}
